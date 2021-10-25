
export default function Header(props) {
  console.log('my props', props)
  return (
    <div>
      {props.data.map(t => <div>{t.name}, {t.lastName}</div>)}
    </div>
  )
}
