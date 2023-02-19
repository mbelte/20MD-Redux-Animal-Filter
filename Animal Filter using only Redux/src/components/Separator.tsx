import React from "react"

export type SeparatorType = {
    value: string;
};

const Separator = ({ value = '' }: SeparatorType) => {
  return (
    <div className="form__separator">
        { value }
    </div>
  )
};

export default Separator;
