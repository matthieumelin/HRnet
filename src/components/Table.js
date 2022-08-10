import React from 'react'

import InputSearch from './table/InputSearch'
import SelectEntries from './table/SelectEntries'
import EntriesInfo from './table/EntriesInfo'

import styled from 'styled-components'

export default function Table() {
  return (
    <div>
        <EntriesInfo />
        <SelectEntries />
        <InputSearch />
    </div>
  )
}
