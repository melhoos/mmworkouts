import { MultiValue } from 'react-select';

type SelectOption = {
  label: string;
  value: string;
};

export function mapToSelectOptionArrayFromStringArray(
  options: string[]
): SelectOption[] {
  return options.map((o: string) => mapToSelectOption(o));
}

function mapToSelectOption(option: string): SelectOption {
  return { label: option, value: option.toLowerCase() };
}

export function mapToStringArray(
  selectOptions: MultiValue<SelectOption>
): string[] {
  return selectOptions.map((so: SelectOption) => so.value);
}

export function mapToSelectOptionArray(
  selectOptions: MultiValue<SelectOption>
): SelectOption[] {
  return selectOptions.map((so: SelectOption) => so);
}

export default SelectOption;
