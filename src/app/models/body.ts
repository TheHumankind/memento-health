export interface BodySegment {
  body: {
    head: {
      name: string,
      problems: string[]
    },
    arm: {
      name: string,
      problems: string[]
    }
  }
}
