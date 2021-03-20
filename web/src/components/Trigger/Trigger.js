const DOMAIN = process.env.DOMAIN || 'localhost:8910'

const Trigger = ({ trigger }) => {
  const onTrigger = () => {}
  return (
    <div>
      <p>
        <code>
          {`<button
          onClick={() => window.open("http://${DOMAIN}/triggers/${trigger.id}")}
        >
          Start Quest
        </button>`}
        </code>
      </p>
    </div>
  )
}

export default Trigger
