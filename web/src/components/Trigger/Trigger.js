const DOMAIN = process.env.DOMAIN || 'localhost:8910'

const Trigger = ({ trigger }) => {
  const onTrigger = () => {}
  return (
    <div>
      <p>
        <b>👇 copy + share ❤️</b>
        <br />
        {`http://${DOMAIN}/quests/${trigger.id}`}
      </p>
    </div>
  )
}

export default Trigger
