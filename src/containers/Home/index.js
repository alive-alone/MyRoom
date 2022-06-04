import TabBar from "../../components/TabBar/TabBar";

var selectedTab = "/home";
function Home() {
  return (
    <div className='content'>
      <TabBar selectedTab={selectedTab}></TabBar>
    </div>
  );
}

export default Home;