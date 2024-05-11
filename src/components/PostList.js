import useAuthContext from "../hooks/use-auth-context";
import Post from "./Post";
import PutData from "../dbFunc/PutData";
const PostList = ({ yourPosts }) => {
  const { accountDetails, handleAccount } = useAuthContext();
  const { id } = accountDetails;
  const handlePostDelete = async (postId) => {
    const updatedPosts = yourPosts.filter((post) => {
      return post.id !== postId;
    });

    const updatedAccount = await PutData("accounts", id, {
      ...accountDetails,
      yourPosts: updatedPosts,
    });

    handleAccount(updatedAccount);
  };

  const handleTextEdit = async (postId, updatedText) => {
    const updatedPosts = yourPosts.map((post) => {
      if (postId === post.id) {
        return {
          ...post,
          yourPosts: updatedText,
        };
      }
      return post;
    });
    const updatedAccount = await PutData("accounts", id, {
      ...accountDetails,
      yourPosts: updatedPosts,
    });

    handleAccount(updatedAccount);
  };

  const renderedPosts =
    yourPosts && yourPosts.length > 0 ? (
      yourPosts.map((post) => (
        <Post
          key={post.id}
          yourPost={post}
          handlePostDelete={handlePostDelete}
          accountDetails={accountDetails}
          handleTextEdit={handleTextEdit}
        />
      ))
    ) : (
      <p className="mt-5">No posts available</p>
    );

  return <>{renderedPosts}</>;
};

export default PostList;
