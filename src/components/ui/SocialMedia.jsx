import { Button } from "./button"

function SocialMedia() {
  return (
    <div className="flex gap-4 absolute top-10 left-10">
        <Button variant="outline" size="icon">
          <img src="twitter.svg" alt="Twitter" />
        </Button>
        <Button variant="outline" size="icon">
          <img src="github.svg" alt="Github" />
        </Button>
        <Button variant="outline" size="icon">
          <img src="linkedin.svg" alt="LinkedIn" />
        </Button>
      </div>
  )
}

export default SocialMedia