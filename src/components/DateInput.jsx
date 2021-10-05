export default function DateInput({
  id = "id_do_input_date",
  labelDescription = "Descrição do label:",
  inputValue = "20/08/2021",
  onInputChange = null,
}) {
  function hadleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus
        id={id}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={hadleInputChange}
      />
    </div>
  );
}
