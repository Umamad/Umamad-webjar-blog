const SearchIcon = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.122 11.72c0-3.31 2.691-6 6-6 3.31 0 6 2.69 6 6 0 3.308-2.69 6-6 6-3.309 0-6-2.692-6-6Zm15.707 8.292-3.395-3.396a7.952 7.952 0 0 0 1.688-4.897c0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8a7.952 7.952 0 0 0 4.897-1.688l3.396 3.395a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"
    />
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={19}
      height={19}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.122 11.72c0-3.31 2.691-6 6-6 3.31 0 6 2.69 6 6 0 3.308-2.69 6-6 6-3.309 0-6-2.692-6-6Zm15.707 8.292-3.395-3.396a7.952 7.952 0 0 0 1.688-4.897c0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8a7.952 7.952 0 0 0 4.897-1.688l3.396 3.395a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"
      />
    </mask>
    <g mask="url(#a)">
      <path d="M.122.719h24v24h-24z" />
    </g>
  </svg>
);

export default SearchIcon;
