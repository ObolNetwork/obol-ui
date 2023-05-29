import { CSS } from "../../../stitches.config";
import { Text, UnstyledTextField, Flex } from "../../atoms";

export interface ENSInputFieldProps {
  css: CSS;
  ensName: string;
  value: string;
  handleOnChange: (value: string) => void;
  nonEditable?: boolean;
  children?: React.ReactNode;
}

export const ENSInputField: React.FC<ENSInputFieldProps> = ({
  children,
  ensName,
  value,
  handleOnChange,
  nonEditable,
  css,
}): JSX.Element => (
  <Flex direction="column" css={css}>
    <Flex css={{ gap: "$xxs" }}>
      <Flex direction="column">
        {ensName && (
          <Text size="4" color="textLight">
            {ensName}
          </Text>
        )}
        <UnstyledTextField
          css={{
            color: "$obolGreen",
          }}
          placeholder="Ethereum address or ENS name"
          onChange={(e: { target: { value: string } }) =>
            handleOnChange(e.target.value)
          }
          value={value}
          readOnly={nonEditable}
        />
      </Flex>
      {children}
    </Flex>
  </Flex>
);