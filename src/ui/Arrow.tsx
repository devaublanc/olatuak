import FondationIcon from '@expo/vector-icons/Foundation';

export function Arrow({
  direction,
  color,
  size = 16,
}: {
  direction: number;
  color: string;
  size?: number;
}) {
  return (
    <FondationIcon
      name="arrow-down"
      size={size}
      color={color}
      style={{
        transform: [{ rotate: `${direction}deg` }],
      }}
    />
  );
}
