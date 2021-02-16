import { AuthService } from './auth/auth.service'
import { ContentService } from './content/content.service'
import { CommentService } from './comment/comment.service'

export default ({ $axios }, inject) => {
  const ServiceRepository = {
    AuthService: AuthService($axios),
    ContentService: ContentService($axios),
    CommentService: CommentService($axios)
  }

  inject('ServiceRepository', ServiceRepository)
}
