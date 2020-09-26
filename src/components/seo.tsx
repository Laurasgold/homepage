import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title?: string
  description?: string
  image?: string
  pathname: string
  canonicalUrl?: string
  isCanonicalUrlHidden?: boolean
  robots?: string
  children?: React.ReactNode
  keywords?: []
}

const SEO = ({
  image = "",
  pathname,
  description = "",
  title,
  robots = "index, follow",
  canonicalUrl = "",
  isCanonicalUrlHidden = false,
  keywords = [],
  children,
}: Props) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        siteTitle,
        siteName,
        siteDescription,
        socialDescription,
        socialTitle,
        siteImage,
        twitterId,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            siteTitle
            siteName
            siteDescription
            socialDescription
            socialTitle
            siteImage
            twitterId
          }
        }
      }
    `
  )

  return (
    <Helmet title={title || siteTitle} titleTemplate={`%s | ${siteName}`}>
      <html lang="en" />
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image || `${siteUrl}${siteImage}`} />
      <meta name="robots" content={robots} />
      {!isCanonicalUrlHidden && (
        <link rel="canonical" href={canonicalUrl || `${siteUrl}${pathname}`} />
      )}
      {keywords ? (
        keywords.map(keyword => (
          <meta key={keyword} name="keywords" content={keyword} />
        ))
      ) : (
        <meta
          name="keywords"
          content="content"
          sprinkler="Sprinkler"
          smart="Smart"
          irrigation="Irrigation"
        />
      )}
      {/* Social */}
      <meta itemProp="name" content={siteName} />
      <meta property="st:title" content={title || socialTitle} />
      <meta property="st:info" content={description || socialDescription} />
      {/* OG */}
      <meta property="og:url" content={`${siteUrl}${pathname || "/"}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title || socialTitle} />
      <meta
        property="og:description"
        content={description || socialDescription}
      />
      <meta property="og:image" content={image || `${siteUrl}${siteImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || socialTitle} />
      <meta name="twitter:creator" content={twitterId} />
      <meta name="twitter:site" content={twitterId} />
      <meta
        name="twitter:description"
        content={description || socialDescription}
      />
      <meta name="twitter:image" content={image || `${siteUrl}${siteImage}`} />
      <link rel="preconnect" href="https://checkout.rachio.com" />
      {children}
    </Helmet>
  )
}

export default SEO
