type Props = {
  placeholder: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
};

const TextField = ({
  width = '100%',
  height = '20px',
  onChange,
  ...props
}: Props) => {
  return (
    <input
      {...props}
      className="text-field"
      style={{ width, height }}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  )
};

export default TextField;
