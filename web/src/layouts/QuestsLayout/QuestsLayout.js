import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const QuestsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">Quests</h1>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default QuestsLayout
