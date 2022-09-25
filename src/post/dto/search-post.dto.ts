export class SearchPostDto {
  title?: string;
  body?: string;
  tag?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
}
