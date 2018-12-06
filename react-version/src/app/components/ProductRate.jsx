import React from 'react'
import PropTypes from 'prop-types'

const ProductRate = props => {
  const { rate, select, out, hover, dynamic } = props
  const width = (rate / 5) * 100
  function selectLocal(n) {
    if (!select) return
    select(n)
  }
  function hoverLocal(n) {
    if (!hover) return
    hover(n)
  }
  function outLocal() {
    if (!out) return
    out()
  }
  let className = 'product-rate'
  if (dynamic) {
    className += ' product-rate-dynamic product-rate__selected-' + rate
  }
  return (
    <div className={className}>
      <svg
        width="90"
        height="19"
        viewBox="0 0 90 19"
        onMouseLeave={outLocal}
        onBlur={outLocal}
        tabIndex="0"
      >
        <mask id="fill">
          <path
            d="M9.08838 1.88171L10.6302 6.62691L10.7424 6.9724H11.1057H16.0951L12.0586 9.90509L11.7647 10.1186L11.877 10.4641L13.4188 15.2093L9.38227 12.2766L9.08838 12.0631L8.79449 12.2766L4.75798 15.2093L6.29979 10.4641L6.41204 10.1186L6.11815 9.90509L2.08164 6.9724H7.07104H7.43431L7.54657 6.62691L9.08838 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            d="M27.0591 1.88171L28.6009 6.62691L28.7131 6.9724H29.0764H34.0658L30.0293 9.90509L29.7354 10.1186L29.8477 10.4641L31.3895 15.2093L27.353 12.2766L27.0591 12.0631L26.7652 12.2766L22.7287 15.2093L24.2705 10.4641L24.3827 10.1186L24.0889 9.90509L20.0523 6.9724H25.0417H25.405L25.5173 6.62691L27.0591 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            d="M45.0298 1.88171L46.5716 6.62691L46.6839 6.9724H47.0471H52.0365L48 9.90509L47.7061 10.1186L47.8184 10.4641L49.3602 15.2093L45.3237 12.2766L45.0298 12.0631L44.7359 12.2766L40.6994 15.2093L42.2412 10.4641L42.3535 10.1186L42.0596 9.90509L38.023 6.9724H43.0124H43.3757L43.488 6.62691L45.0298 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            d="M63.0005 1.88171L64.5423 6.62691L64.6546 6.9724H65.0178H70.0072L65.9707 9.90509L65.6768 10.1186L65.7891 10.4641L67.3309 15.2093L63.2944 12.2766L63.0005 12.0631L62.7066 12.2766L58.6701 15.2093L60.2119 10.4641L60.3242 10.1186L60.0303 9.90509L55.9938 6.9724H60.9832H61.3464L61.4587 6.62691L63.0005 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            d="M80.9712 1.88171L82.513 6.62691L82.6253 6.9724H82.9885H87.9779L83.9414 9.90509L83.6475 10.1186L83.7598 10.4641L85.3016 15.2093L81.2651 12.2766L80.9712 12.0631L80.6773 12.2766L76.6408 15.2093L78.1826 10.4641L78.2949 10.1186L78.001 9.90509L73.9645 6.9724H78.9539H79.3171L79.4294 6.62691L80.9712 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
        </mask>
        <g className="product-rate__stars">
          <path
            onMouseOver={() => hoverLocal(1)}
            onFocus={() => hoverLocal(1)}
            onClick={() => selectLocal(1)}
            tabIndex="0"
            d="M9.08838 1.88171L10.6302 6.62691L10.7424 6.9724H11.1057H16.0951L12.0586 9.90509L11.7647 10.1186L11.877 10.4641L13.4188 15.2093L9.38227 12.2766L9.08838 12.0631L8.79449 12.2766L4.75798 15.2093L6.29979 10.4641L6.41204 10.1186L6.11815 9.90509L2.08164 6.9724H7.07104H7.43431L7.54657 6.62691L9.08838 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            onMouseOver={() => hoverLocal(2)}
            onFocus={() => hoverLocal(2)}
            onClick={() => selectLocal(2)}
            tabIndex="0"
            d="M27.0591 1.88171L28.6009 6.62691L28.7131 6.9724H29.0764H34.0658L30.0293 9.90509L29.7354 10.1186L29.8477 10.4641L31.3895 15.2093L27.353 12.2766L27.0591 12.0631L26.7652 12.2766L22.7287 15.2093L24.2705 10.4641L24.3827 10.1186L24.0889 9.90509L20.0523 6.9724H25.0417H25.405L25.5173 6.62691L27.0591 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            onMouseOver={() => hoverLocal(3)}
            onFocus={() => hoverLocal(3)}
            onClick={() => selectLocal(3)}
            tabIndex="0"
            d="M45.0298 1.88171L46.5716 6.62691L46.6839 6.9724H47.0471H52.0365L48 9.90509L47.7061 10.1186L47.8184 10.4641L49.3602 15.2093L45.3237 12.2766L45.0298 12.0631L44.7359 12.2766L40.6994 15.2093L42.2412 10.4641L42.3535 10.1186L42.0596 9.90509L38.023 6.9724H43.0124H43.3757L43.488 6.62691L45.0298 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            onMouseOver={() => hoverLocal(4)}
            onFocus={() => hoverLocal(4)}
            onClick={() => selectLocal(4)}
            tabIndex="0"
            d="M63.0005 1.88171L64.5423 6.62691L64.6546 6.9724H65.0178H70.0072L65.9707 9.90509L65.6768 10.1186L65.7891 10.4641L67.3309 15.2093L63.2944 12.2766L63.0005 12.0631L62.7066 12.2766L58.6701 15.2093L60.2119 10.4641L60.3242 10.1186L60.0303 9.90509L55.9938 6.9724H60.9832H61.3464L61.4587 6.62691L63.0005 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
          <path
            onMouseOver={() => hoverLocal(5)}
            onFocus={() => hoverLocal(5)}
            onClick={() => selectLocal(5)}
            tabIndex="0"
            d="M80.9712 1.88171L82.513 6.62691L82.6253 6.9724H82.9885H87.9779L83.9414 9.90509L83.6475 10.1186L83.7598 10.4641L85.3016 15.2093L81.2651 12.2766L80.9712 12.0631L80.6773 12.2766L76.6408 15.2093L78.1826 10.4641L78.2949 10.1186L78.001 9.90509L73.9645 6.9724H78.9539H79.3171L79.4294 6.62691L80.9712 1.88171Z"
            fill="white"
            stroke="#B9B9B9"
          />
        </g>
        {!dynamic && <rect style={{ width: width + '%' }} mask="url(#fill)" />}
      </svg>
    </div>
  )
}
ProductRate.propTypes = {
  dynamic: PropTypes.bool,
  rate: PropTypes.number,
  select: PropTypes.func,
  hover: PropTypes.func,
  out: PropTypes.func
}
ProductRate.defaultProps = {
  rate: 0,
  dynamic: false,
  select: null,
  hover: null,
  out: null
}
export default ProductRate
