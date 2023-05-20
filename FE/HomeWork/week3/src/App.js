import {useState} from 'react';
import {Header, Nav, Article, Create, Update} from "./Components";

const App = () => {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'js', body: 'javascript is ...'},
  ])

  const handleTopicClick = (topicId) => { // 완성해보세요
    setId(topicId)
    setMode('READ')
  };

  const handleCreate = (title, body) => { // 완성해보세요
    // const newTopic = {id:nextId, title, body}
    // setTopics(...topics, newTopic)
    setTopics([...topics, {id:nextId, title, body}])
    setMode('WELCOME')
    setNextId((prevId)=>prevId+1)
  };

  const handleUpdate = (title, body) => { // 완성해보세요
    // 전달받은 title, body로 해당 topics 값을 변경한 새로운 topics 생성 
		// 업데이트된 topics를 기존 topics에 할당
    const tempTopics = topics.map(
      (topic) =>
        topic.id === id ? { ...topic, title, body } : topic
      )
		// 업데이트 끝났으면 읽기모드로
    setTopics(tempTopics)
    setMode('READ')
  };

  let content = null;
  let contextControl = null; 
	let topic = null;

	switch (mode) {
    case 'WELCOME':
      content = <Article title="Welcome" body="Hello, WEB"/>;
      break;
    case 'READ':
      topic = topics.find((topic) => topic.id === id);
      //console.log(topic) -> undefined
      content = <Article title={topic.title} body={topic.body}/>;
      contextControl = <li>
          <a href={'/update/' + id} onClick={(e)=>{
              e.preventDefault();
              setMode('UPDATE');  
            }
          }> Update </a>
        </li>
      break;
    case 'CREATE':
      content = <Create onCreate={handleCreate} />;
      break;
    case 'UPDATE':
      topic = topics.find((topic) => topic.id === id);
      content = <Update title={topic.title} body={topic.body} onUpdate={handleUpdate}/>
      break;
    default: break;
  }
  
  return (
    <div>
      <Header 
        title="React" 
        onChangeMode={() => {setMode('WELCOME');}}
      />
      <Nav 
        topics={topics} 
        onChangeMode={handleTopicClick}
      />

      {content}

      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>

  );
}

export default App;