export default function TextInput({
  id = "id_do__input_checkbox",
  labelDescription = "Descrição do checkbox",
  inputValue = "Valor padrão do input",
  onCheckboxChange = null,
  autoFocus= false
}) {
  function hadleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }
  return (
    <div className="flex flex-rol items-center space-x-2 my-4">
      <input
        autoFocus
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={hadleInputChange}
      />
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}
