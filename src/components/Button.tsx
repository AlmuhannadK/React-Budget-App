type ButtonProbs = {
  label: string;
};

export function Button({ label }: ButtonProbs) {
  return <button>{label}</button>;
}
