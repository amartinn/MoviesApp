import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import translate from "../../translations";
class MetaTags extends Component {
    render () {
      const meta = {
        location: window.location.href,
        description: `${translate('project.description')}`,
        keywords: `${translate('project.keywords')}`,
        title: `${translate('project.title')}`
      }
      return (
        <Helmet>
          <title>Movies App</title>
          <link rel='canonical' href={meta.location} />
          <meta name='description' content={meta.description} />
          <meta name='title' content={meta.title} />
          <meta name='keywords' content={meta.keywords} />
        </Helmet>
      )
    }
  }
  
  export default MetaTags