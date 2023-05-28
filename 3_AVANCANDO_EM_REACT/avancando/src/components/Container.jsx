

export const Container = ({children, newProp}) => {
  return (
    <div>
        <h2>Container Exibindo Children</h2>
        {children}
        <p>Novo valor: {newProp}</p>
    </div>
  )
}

export default Container
