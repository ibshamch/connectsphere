import useAuthContext from "../hooks/use-auth-context";
import Container from "./Container";
import PostList from "./PostList";
import PostCreation from "./PostCreation";

const Feed = () => {
  const { accountDetails } = useAuthContext();
  const { yourPosts } = accountDetails;

  return (
    <Container
      className="flex w-2/4 flex-col py-3 mb-12 pl-12 items-center overflow-auto"
      style={{ maxHeight: "calc(100vh - 20px)" }}
    >
      <PostCreation />
      <PostList yourPosts={yourPosts} />
    </Container>
  );
};

export default Feed;
