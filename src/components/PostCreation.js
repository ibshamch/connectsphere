import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { CiFaceSmile } from "react-icons/ci";
import useAuthContext from "../hooks/use-auth-context";
import PutData from "../dbFunc/PutData";
import useThemeContext from "../hooks/use-theme-context";

const PostCreation = () => {
  const { accountDetails, handleAccount } = useAuthContext();
  const { darkTheme } = useThemeContext();
  const { id, email, firstName, lastName } = accountDetails;
  const [postText, setPostText] = useState("");
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const postObj = {
      firstName,
      lastName,
      post: postText,
      postedBy: email,
      postedAt: new Date().toDateString(),
      id: Math.floor(Math.random() * 10000),
    };

    const updatedAccount = await PutData("accounts", id, {
      ...accountDetails,
      yourPosts: [postObj, ...accountDetails.yourPosts],
    });
    handleAccount(updatedAccount);
    setPostText("");
  };
  const handlePostText = (e) => {
    setPostText(e.target.value);
  };
  return (
    <form
      onSubmit={handlePostSubmit}
      className={`${
        darkTheme ? "bg-inputDark" : "bg-inputLight"
      } opacity-100 border-none rounded-3xl border-2 py-3 px-4 w-3/4 `}
    >
      <div className="post-creation-container">
        <textarea
          value={postText}
          onChange={handlePostText}
          className="w-full text-black rounded-lg p-2 border-none outline-none min-h-20 resize-none scroll-smooth overflow-y-auto"
          placeholder="Share your thinking ? "
        />
        <Container className="justify-between mt-4 items-center">
          <CiFaceSmile className="text-3xl" />
          <Button type="submit" primary roundedFull className="mt-1">
            Post
          </Button>
        </Container>
      </div>
    </form>
  );
};

export default PostCreation;
