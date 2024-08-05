import React, { useEffect } from "react";
import { Box, ChakraProvider} from "@chakra-ui/react";
import { createPortal } from "react-dom";

interface ButtonFinderProps {
  buttonText: string;
  querySelector: string;
  parentText: string;
  onClick: () => void;
  closestParent: string;
  timeout?: number;
}

const useButtonFinder = ({ buttonText, querySelector, parentText, closestParent, timeout, onClick }: ButtonFinderProps) => {
  const [buttonFind, setButtonFind] = React.useState<HTMLElement>();

  useEffect(() => {
    const updateButton = () => {
      const buttons = document.querySelectorAll(querySelector);
          buttons?.forEach((button) => {
              const buttonHtmlElement = button as HTMLElement;
              const parentDiv = buttonHtmlElement.closest(closestParent);
              if (parentDiv?.textContent?.search(parentText) === 0) {
                if (buttonHtmlElement.textContent === buttonText) {
                  buttonHtmlElement.addEventListener('click', () => {
                    onClick()
                  }, { once: true });
                  setButtonFind(buttonHtmlElement);
                }
              }
          });
    };
    setTimeout(updateButton, timeout);
  }, [querySelector, parentText, buttonText, closestParent, timeout, onClick]);

  return { buttonFind };
};

const Widget: React.FC = () => {
  const [step, setStep] = React.useState(0);

  const goToNextStep = () => {
    if(step === arrayStep.length - 1) {
      alert('Congratulation! You have completed the task');
    } else {
      setStep(step + 1);
    }
  }

  const arrayStep = [
    {
      parentText: "Mountain Master",
      buttonText: "Add to cart",
      explanation: "Click here",
      closestParent: 'div',
      querySelector: 'button',
      timeout: 0,
    },
    {
      parentText: "Beach Cruiser",
      explanation: "Click here",
      buttonText: "Add to cart",
      closestParent: 'div',
      querySelector: 'button',
      timeout: 0,
    },
    {
      parentText: "",
      explanation: "Click here",
      buttonText: "Pay",
      closestParent: 'div',
      querySelector: 'button',
      timeout: 500,
    },
    {
      parentText: "Beach Cruiser",
      explanation: "Click here to remove",
      buttonText: "Remove",
      closestParent: 'li',
      querySelector: 'button',
      timeout: 0,
    },
    {
      parentText: "Confirm Payment",
      explanation: "Click here",
      buttonText: "Validate",
      closestParent: 'div',
      querySelector: 'button',
      timeout: 0,
    },
  ];

  const currentStep = arrayStep[step];

  const { buttonFind } = useButtonFinder({...currentStep, onClick: goToNextStep});

  return (
    <ChakraProvider>
      {buttonFind && createPortal(
        <Box
        position={'absolute'}
        bottom={'-50px'}
        bg={'orange'}
        color={'white'}
        p={3}
        borderRadius={5}
        wordBreak={'break-all'}
        zIndex={9999}
        _after={{
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'transparent transparent orange transparent',
        }}
      >
          {currentStep.explanation}
          </Box>,
        buttonFind as HTMLButtonElement
      )}
    </ChakraProvider>
  );
};

export default Widget;
