import Pet from './Pet';

const Person = ({ name, age, petsName, type }) => {
    return (
        <div>
            <h1>My name is {name} and I am {age}</h1>
            <Pet petsName={petsName} type={type} />
        </div>
    );
};
export default Person;