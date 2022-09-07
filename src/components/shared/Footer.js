const styles = {
  link: { 
    cursor: 'pointer',
    margin: '0 5px',
    color: 'blue', 
    textDecoration: 'underline',
  }
}

const filterLink = (current, name, setFilter) => {
  return current === name ?
    <span>{name}</span>
  :
    <span 
      onClick={() => setFilter(name)}
      style={styles.link}
    >
      {name}
    </span>
}

const Footer = ({ filter, setFilter }) => (
  <>
    { ['All', 'Active', 'Completed'].map( f =>
      filterLink(filter, f, setFilter)  
    )}
  </>
)

export default Footer;