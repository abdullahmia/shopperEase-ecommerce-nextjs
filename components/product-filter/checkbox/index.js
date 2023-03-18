
const Checkbox = ({ name, id }) => {
  return (
    <label htmlFor={name} className="flex items-center gap-2 text-[14x] font-[400] text-[#4e4d4d] text-start hover:text-[#336699]">
      <input type="checkbox" id={name} />
      <p>{name}</p>
    </label>
  )
}

export default Checkbox;