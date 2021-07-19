import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../../content/all-data.json"
import DataPlayground from "../components/data-playground"
import { useState } from "react"
import NavigationBar from "../components/navigation-bar"
import { nanoid } from "nanoid"

function IndexPage() {

  const [isMetric, setIsMetric] = useState(false);

  return (
    <Layout
      navigation={(
        <NavigationBar
          useMetric={{enabled: isMetric, onChange: () => setIsMetric(!isMetric)}}
        />)}
    >
      <Seo title="Home" />
      <DataPlayground dataSet={JSONData} isMetric={isMetric}/>
    </Layout>
  )
}

export default IndexPage
