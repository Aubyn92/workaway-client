import styled from "styled-components"
import tw from "twin.macro"

// export const AppStyles = styled.div.attrs({
//     className: "w-full h-screen bg-gray-100 p-2"
//   })``;

const FormStyle = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }

}
`;


// const AppStyles = styled.div.attrs({
//     className: "w-full h-screen flex flex-col items-center justify-center"
//   })`
//     & {
//       h1 {
//         ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
//       }
//       p {
//         ${tw`text-gray-700 text-lg`}
//       }
//       h2 {
//         ${tw`text-2xl font-hairline mt-5 text-teal-500`}
//       }
//       ul {
//         ${tw`inline-flex`}
//       }
//       li {
//         ${tw`mr-5`}
//       }
//       a {
//         ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
//       }
//     }
//   `;

export default FormStyle