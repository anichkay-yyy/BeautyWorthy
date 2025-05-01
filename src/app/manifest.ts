import { type MetadataRoute } from 'next';
import { getManifest } from "beauty";

export default function manifest(): MetadataRoute.Manifest {
    return getManifest();
}