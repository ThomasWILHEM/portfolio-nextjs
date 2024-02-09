type Project = {
    name: string
    short_description: string
    description: string
    slug?: string
    demo_path?: string
    github_path?: string
}

type Experience = {
    name: string
    dates: string
    institution: string
    city: string
    infos: string
    type: string
    techs: Tech[]
}

type Tech = {
    name: string
    image_path: string
    type: string
    level: number
    experiences: Experience[]
}