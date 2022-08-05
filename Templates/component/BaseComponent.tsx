export interface BaseTemplate {
  sampleTextProp: string
}

const BaseComponent: React.FC<BaseTemplate> = ({ sampleTextProp }) => {
  return <div className="tailwindcss-classes">{sampleTextProp}</div>
}

export default BaseComponent
