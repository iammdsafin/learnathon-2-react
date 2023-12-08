//use of props in functional component
//using interface
import "./button.css";
interface notPokemeButtonProps {
  type: string;
}

// Use of jsx and tsx in functional component
const NotPokeMeButton = (props: notPokemeButtonProps) => {
  const { type } = props;
  const getButtonText = (buttonType: string) => {
    if (buttonType === "notpokeme") {
      return "Please Do Not Poke Me!";
    } else {
      return "Do Not Poke Me!";
    }
  };

  return <button className="style">{getButtonText(type)}</button>;
};

// const NotPokeMe = (props: notPokeButtonProps) => {
//   const { type } = props;
//   // console.log(size);
//   return (
//     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
//       {type === "notpokeme" ? "Please Do Not Poke Me!" : 'Do Not Poke Me!'}
//     </button>
//   );
// };

// const NotPokeMe = (props: { size: string }) => {
//   const { size } = props;
//   // console.log(size);
//   return (
//     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
//       Do Not Poke Me!
//     </button>
//   );
// };

export default NotPokeMeButton;
