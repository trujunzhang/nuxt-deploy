import { Marker } from '@web/vendor/react-leaflet-universal'

interface IExtendedMarkerProps {
  autoPopup: boolean
  draggable: boolean
  onMoveend: any
  position: any
}

interface IExtendedMarkerState {}

export class ExtendedMarker extends Marker<IExtendedMarkerProps, IExtendedMarkerState> {
  constructor(props: IExtendedMarkerProps) {
    super(props)
  }

  componentWillReceiveProps(nextProps: IExtendedMarkerProps) {
    if (this.props.autoPopup && !!this.leafletElement) {
      this.leafletElement.openPopup()
    }
  }

  componentDidMount() {
    // Call the Marker class componentDidMount (to make sure everything behaves as normal)
    super.componentDidMount()

    // Access the marker element and open the popup.
    if (this.props.autoPopup && !!this.leafletElement) {
      this.leafletElement.openPopup()
    }
  }
}
