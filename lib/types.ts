type Project = {
    name: string
    short_description: string
    description: string
    slug: string | null;
    demo_path: string | null;
    github_path: string | null;
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
    level: number | null;
    experiences?: Experience[] | null
}