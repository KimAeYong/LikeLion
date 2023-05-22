const Nav = (props) => {
  return (
    <div>
      <ol>
        {props.topics.map((topic) => (
          <li key={topic.id}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(topic.id);
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Nav;
