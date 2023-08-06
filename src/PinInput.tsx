import {
  ChangeEvent,
  Dispatch,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  SetStateAction,
  startTransition,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import cl from "clsx";

import styles from "./pin-input.module.css";
import { PinType } from "./App";

interface Props extends HTMLAttributes<HTMLInputElement> {
  regexPattern?: RegExp;
  pinLength?: number;
  setPinValue: Dispatch<SetStateAction<Array<PinType>>>;
  onSuccess?: () => void;
  pinValue: Array<PinType>;
}

const BACKSPACE = "Backspace";

const PinInput: FC<Props> = ({
  pinLength = 5,
  regexPattern = /^[0-9]\d*$/,
  setPinValue,
  onSuccess,
  pinValue = [],
  ...other
}) => {
  const id = useId();
  const [currentPin, setCurrentPin] = useState<Array<PinType>>(pinValue);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [errorList, setErrorList] = useState<Array<boolean | undefined>>([]);
  const [isInPasswordMode, setisInPasswordMode] = useState(true);

  const onPinChange = useCallback(
    (pinEntry: PinType, index: number) => {
      const newPin = [...currentPin];
      newPin[index] = pinEntry;
      setCurrentPin(newPin);
      setPinValue(newPin);
    },
    [currentPin, setPinValue]
  );

  const changeFocusPin = useCallback((pinIndex: number) => {
    const focusedPinIndex = inputRefs.current[pinIndex];
    if (focusedPinIndex) {
      focusedPinIndex.focus();
    }
  }, []);

  const handlePressBack = useCallback(
    (event: KeyboardEvent<HTMLInputElement>, index: number) => {
      const currentCode = event.nativeEvent.code;

      if (currentCode !== BACKSPACE) {
        return null;
      }

      setErrorList((prev) => {
        const newErrList = [...prev];
        newErrList[index] = undefined;
        return newErrList;
      });

      if (currentPin[index] === undefined) {
        return changeFocusPin(index - 1);
      }

      onPinChange(undefined, index);
    },
    [changeFocusPin, currentPin, onPinChange]
  );

  const handleChangePin = useCallback(
    (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const valuesArray = event.target.value.split("");
      const matchPattern = regexPattern.test(valuesArray[0]);

      setPinValue((prev) => {
        const newPin = [...prev];
        newPin[index] = valuesArray[0];
        return newPin;
      });

      setCurrentPin((prev) => {
        const newPin = [...prev];
        newPin[index] = valuesArray[0];
        return newPin;
      });

      if (!matchPattern) {
        setErrorList((prev) => {
          const newErrList = [...prev];
          newErrList[index] = true;
          return newErrList;
        });

        return null;
      }

      setErrorList((prev) => {
        const newErrList = [...prev];
        newErrList[index] = false;
        return newErrList;
      });

      changeFocusPin(index + 1);
    },
    [changeFocusPin, regexPattern, setPinValue]
  );

  const renderBorder = useCallback((errValue: boolean | undefined) => {
    if (errValue === undefined) {
      return null;
    }

    if (!errValue) {
      return styles.blockPinCorrect;
    }

    return styles.blockPinFalse;
  }, []);

  useEffect(() => {
    if (pinValue.length > 0) {
      setCurrentPin(pinValue);
    }
  }, [pinValue]);

  useEffect(() => {
    changeFocusPin(0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setErrorList(new Array(pinLength).fill(undefined));
  }, [pinLength]);

  useEffect(() => {
    const allDataValid =
      currentPin.every((pin) => pin) && currentPin.length === pinLength;
    const haveErrEl = errorList.some((e) => e);
    if (allDataValid && !haveErrEl) {
      startTransition(() => onSuccess?.());
    }
  }, [currentPin, errorList, onSuccess, pinLength]);

  return (
    <>
      <div>
        {new Array(pinLength).fill(0).map((_, index) => (
          <input
            key={`pinner${id}+${index}`}
            className={cl(styles.blockPin, renderBorder(errorList[index]))}
            ref={(el) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            maxLength={1}
            max={1}
            disabled={
              errorList?.findIndex((el) => el) + 1
                ? index > errorList?.findIndex((el) => el)
                : false
            }
            onChange={(event) => handleChangePin(event, index)}
            onKeyDown={(event) => handlePressBack(event, index)}
            value={currentPin?.[index] || ""}
            type={isInPasswordMode ? "password" : "text"}
            {...other}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setisInPasswordMode((prev) => !prev);
        }}
        className={styles.mt3}
      >
        {isInPasswordMode ? "Show" : "Hidden"}
      </button>
    </>
  );
};

export default PinInput;
