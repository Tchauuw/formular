export function useSubmit() {
  const submit = (options) => {
    console.log(options.id, options.pwd)
  }
  return {
    submit
  }
}
