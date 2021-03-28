import Scrollspy from "react-scrollspy";

const Sidebar = (props) => {
  return (
    <Scrollspy
      items={["sectiune-1", "sectiune-2", "sectiune-3"]}
      currentClassName="is-current"
    >
      {props.butoane.map((btn) => (
        <div>
          <a key={btn.id} href={btn.tinta} className="btn m-5 text-light">
            {btn.text}
          </a>
        </div>
      ))}
    </Scrollspy>
  );
};

export default Sidebar;
