import styles from './index.module.css';

type TModalInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ModalInput = (props: TModalInputProps) => (
  <>
    <input
      type='number'
      placeholder='Введите значение...'
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
    />
  </>
);
