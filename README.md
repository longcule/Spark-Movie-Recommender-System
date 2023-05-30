# Movies Recommendation System using Apache Spark

## Đường dẫn Dataset

Dataset [Click here](https://grouplens.org/datasets/movielens/latest/)

## Chi tiết tập dữ liệu

- 27,000,000 ratings  
- 1,100,000 tag applications applied to 58,000 movies by 280,000 users. 
- Includes tag genome data with 14 million relevance scores across 1,100 tags. 
- Last updated 9/2018.
- Size: 1.3GB

## Thông tin Dataset trên HDFS

Đây là tập dataset chứa các tệp tin liên quan đến hệ thống tệp phân tán (HDFS). Tập Dataset này chứa các tệp tin sau:

- `genome-scores.csv`: Dung lượng: 395.63 MB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.
- `genome-tags.csv`: Dung lượng: 17.68 KB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.
- `links.csv`: Dung lượng: 1.21 MB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.
- `movies.csv`: Dung lượng: 2.73 MB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.
- `ratings.csv`: Dung lượng: 724.03 MB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.
- `tags.csv`: Dung lượng: 37.9 MB, Ngày tạo: Apr 12 14:50, Quyền truy cập: `-rw-r--r--`, Nhóm: `team3`, Nhóm chủ sở hữu: `supergroup`.

## Đường dẫn tới các tệp tin trên HDFS

- `ratings.csv`: hdfs://bigdata:9000/user/team3/ratings.csv
- `movies.csv`: hdfs://bigdata:9000/user/team3/movies.csv
- `genome-scores.csv`: hdfs://bigdata:9000/user/team3/user/genome-scores.csv
- `genome-tags.csv`: hdfs://bigdata:9000/user/team3/genome-tags.csv
- `tags.csv`: hdfs://bigdata:9000/user/team3/tags.csv
- `links.csv`: hdfs://bigdata:9000/user/team3/links.csv

## Hình ảnh trực quan

![alt text](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/350099351_120759627690373_968760780494381044_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GX1d16rwZkUAX-w77Rj&_nc_ht=scontent.fhan2-5.fna&oh=03_AdTIAhzd2kxyGaLq9YR8v6Pw_aXEfR9ePzoVMbhxN88rvg&oe=64997AD3)
