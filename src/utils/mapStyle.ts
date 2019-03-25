import injectSheet from "react-jss"

export default function mapStyle( styles: any = {} ) {
  return component => injectSheet( styles )( component )
}
