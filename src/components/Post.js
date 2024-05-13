import Container from "./Container";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button";

const Post = ({
  yourPost,
  handlePostDelete,
  accountDetails,
  handleTextEdit,
}) => {
  const { firstName, lastName } = accountDetails;
  const [showEdit, setShowEdit] = useState(false);
  const [postText, setPostText] = useState(yourPost.post);
  return (
    <Container
      className="flex-col mt-3 p-5 border-black border-2 w-3/4 rounded-lg"
      key={yourPost.id}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CgProfile className="text-3xl" />

          <p className="text-xl">
            {firstName} {lastName}
          </p>
        </div>
        <div className="post-action-buttons cursor-pointer gap-2 flex items-center">
          <MdEdit
            className="text-green-500 text-3xl"
            onClick={() => setShowEdit(true)}
          />
          <MdDelete
            onClick={() => handlePostDelete(yourPost.id)}
            className="text-red-500 text-3xl"
          />
        </div>
      </Container>

      {showEdit ? (
        <Container className="flex-col p-2">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-3/4 ml-8 mb-2 pl-4 text-black rounded-lg p-2 border-none outline-none min-h-20 resize-none scroll-smooth overflow-y-auto"
          />
          <Button
            onClick={() => {
              handleTextEdit(yourPost.id, postText);
              setShowEdit(false);
            }}
            welcome
            roundedFull
            className="self-end"
          >
            Repost
          </Button>
        </Container>
      ) : (
        <p className="pl-5 py-4 text-sm">{postText}</p>
      )}

      <Container className="pl-3  text-3xl reaction-buttons flex items-center gap-3">
        <div>
          <CiHeart className="text-red-500 cursor-pointer text-4xl" />
        </div>
        <div>
          <FaCommentDots className="text-blue-500 cursor-pointer" />
        </div>
        <div>
          <FaShare className="text-green-500 cursor-pointer" />
        </div>
      </Container>
    </Container>
  );
};

export default Post;
