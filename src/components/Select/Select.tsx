import { Icon } from '@iconify/react';
import './Select.scss';

interface Props {
  themes: { id: number, name: string, value: string }[];
  currentTheme: string;
  onChangeTheme: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({ themes, currentTheme, onChangeTheme }: Props) {
  return (
    <div className="themes">
      <label htmlFor="themes">Thème : </label>
      <select id="themes" name="themes" onChange={onChangeTheme} defaultValue={currentTheme}>
        {
          themes.map(({ id, name, value }) => (
            <option key={id} value={value}>{name}</option>
          ))
        }
      </select>
      <Icon icon="solar:alt-arrow-down-linear" className="select__icon" />
    </div>
  );
}