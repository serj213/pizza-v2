import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockLoader = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={260}
    height={458}
    viewBox="0 0 260 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ebeaea"
    {...props}
    >
    <rect x="11" y="311" rx="0" ry="0" width="257" height="84" /> 
    <rect x="8" y="423" rx="14" ry="14" width="106" height="22" /> 
    <rect x="63" y="446" rx="0" ry="0" width="6" height="4" /> 
    <rect x="124" y="412" rx="28" ry="28" width="141" height="43" /> 
    <rect x="20" y="260" rx="0" ry="0" width="229" height="22" /> 
    <rect x="223" y="289" rx="0" ry="0" width="3" height="0" /> 
    <circle cx="129" cy="121" r="110" /> 
    <circle cx="147" cy="152" r="7" />
  </ContentLoader>
)

export default PizzaBlockLoader;