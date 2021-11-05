function Container(props) {
  return (
    <div className="container mx-auto flex items-center justify-between py-3">
      {props.children}
    </div>
  )
}

export default Container
