import React from 'react'
import DetailVideo from '../../components/detail-video/DetailVideo'

interface IProps {
  match: {
    params: {
      id: string
    }
  };
}

const DetailPage: React.FC<IProps> = ({ match }): JSX.Element => {
  return (
    <div className="container-fluid">
      <DetailVideo
        videoId={match.params.id}
      />
    </div>
  )
}

export default DetailPage
