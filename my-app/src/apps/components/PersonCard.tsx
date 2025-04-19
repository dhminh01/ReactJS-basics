import { Person } from "../Types/Person";

interface IPersonProps {
  person: Person;
}

const PersonCard: React.FC<IPersonProps> = (props) => {
  const { name, age, color } = props.person;
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default PersonCard;
