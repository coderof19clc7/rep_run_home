import BodySideBar from './body_side_bar'
import SearchFollowBar from './search_follow_bar'
import PostList from './post_list'

function MainBody() {

  return (
    <>
      <BodySideBar/>
      <PostList/>
      <SearchFollowBar/>
    </>
  );
}

export default MainBody;
